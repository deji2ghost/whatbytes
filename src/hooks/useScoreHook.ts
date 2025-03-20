import React, { useCallback, useState } from 'react'

const useScoreHook = () => {
    const [isOpen, setIsopen] = useState(false);
    
      const [overall, setOverall] = useState({
        rank: 1,
        percentile: 30,
        currentScore: 10,
      });
    
      const [errors, setErrors] = useState({
        rank: "",
        percentile: "",
        currentScore: "",
      });
    
      const [tempForm, setTempForm] = useState(overall);

      const handleUpdateModal = useCallback(
          (value: boolean) => {
            setIsopen(value);
            setTempForm(overall);
            setErrors({ rank: "", percentile: "", currentScore: "" });
          },
          [overall]
        );
      
        const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
          const { value, name } = e.target;
        
          const parsedValue = value === "" ? "" : name === "rank" ? value : parseInt(value, 10) || "";
        
          setTempForm((prevForm) => ({ ...prevForm, [name]: parsedValue }));
        
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: value === "" ? `${name} is required` : "",
          }));
        }, []);
      
        const handleSave = useCallback(() => {
          const newErrors = { rank: "", percentile: "", currentScore: "" };
          let isValid = true;
      
          if (!tempForm.rank) {
            newErrors.rank = "Select a rank";
            isValid = false;
          }
      
          if (
            !tempForm.percentile ||
            tempForm.percentile < 1 ||
            tempForm.percentile > 100
          ) {
            newErrors.percentile = "Pick a number from 1 - 100";
            isValid = false;
          }
      
          if (
            !tempForm.currentScore ||
            tempForm.currentScore < 1 ||
            tempForm.currentScore > 15
          ) {
            newErrors.currentScore = "Pick a number from 1 - 15";
            isValid = false;
          }
      
          if (!isValid) {
            setErrors(newErrors);
            return;
          }
      
          setOverall(tempForm);
          setIsopen(false);
        }, [tempForm]);
  return {
    isOpen,
    overall,
    tempForm,
    errors,
    handleUpdateModal,
    handleChange,
    handleSave,
  }
}

export default useScoreHook
