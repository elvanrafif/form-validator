import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { UserFormValues } from "@/lib/schema"

interface FormResultDialogProps {
  isOpen: boolean
  onClose: () => void
  formData: UserFormValues | null
}

const countries = [
  { value: "us", label: "United States", flag: "🇺🇸" },
  { value: "ca", label: "Canada", flag: "🇨🇦" },
  { value: "uk", label: "United Kingdom", flag: "🇬🇧" },
  { value: "au", label: "Australia", flag: "🇦🇺" },
  { value: "de", label: "Germany", flag: "🇩🇪" },
  { value: "fr", label: "France", flag: "🇫🇷" },
  { value: "jp", label: "Japan", flag: "🇯🇵" },
  { value: "br", label: "Brazil", flag: "🇧🇷" },
  { value: "in", label: "India", flag: "🇮🇳" },
  { value: "cn", label: "China", flag: "🇨🇳" },
]

export function FormResultDialog({ isOpen, onClose, formData }: FormResultDialogProps) {
  const getCountryLabel = (value: string | undefined) => {
    if (!value) return "Not selected";
    const country = countries.find(c => c.value === value);
    return country ? `${country.flag} ${country.label}` : value;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Form Submission Results</DialogTitle>
          <DialogDescription>
            Here are the details you submitted:
          </DialogDescription>
        </DialogHeader>
        {formData && (
          <div className="mt-4 space-y-2">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Age:</strong> {formData.age}</p>
            <p><strong>Country:</strong> {formData.country ? getCountryLabel(formData.country) : "Not selected"}</p>
          </div>
        )}
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

