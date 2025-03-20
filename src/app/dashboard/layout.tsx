import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
        className="flex flex-col"
      >
        <div className="w-full border border-foreground">
        <Navbar />
        </div>
        <div className="flex min-h-screen">
        <Sidebar />
        <div className="p-6">
          {children}
        </div>
        </div>
      </div>
  );
}
