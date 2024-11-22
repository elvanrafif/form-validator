import * as React from "react"
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

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

interface CountrySelectProps {
  value: string
  onChange: (value: string) => void
}

export function CountrySelect({ value, onChange }: CountrySelectProps) {
  const [open, setOpen] = React.useState(false)

  const countriesSelected = countries.find((country) => country.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value && countriesSelected
            ? <>{countriesSelected.flag} {countriesSelected?.label}</>
            : "Select country..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandEmpty>No country found.</CommandEmpty>
          <CommandGroup>
            {countries.map((country) => (
              <CommandItem
                key={country.value}
                onSelect={() => {
                  onChange(country.value)
                  setOpen(false)
                }}
              >
                {country.flag} {country.label}
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value && value === country.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

