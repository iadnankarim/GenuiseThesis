"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const labelText = "mb-[6px] block text-[13px] font-semibold text-[#3a4751]";

interface BrandSelectProps {
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

/** Brand-styled shadcn Select shared across the quote/lead forms. */
export function BrandSelect({ label, placeholder, options, value, onChange }: BrandSelectProps) {
  return (
    <div className="block">
      <span className={labelText}>{label}</span>
      <Select
        items={options}
        value={value || null}
        onValueChange={(v) => onChange(v == null ? "" : String(v))}
        modal={false}
      >
        <SelectTrigger
          aria-label={label}
          className="w-full justify-between rounded-[9px] border-[#dce2e8] bg-white px-3 text-[14px] text-gt-ink data-[size=default]:h-[44px] data-placeholder:text-[#9aa6b0] focus-visible:border-gt-green focus-visible:ring-[3px] focus-visible:ring-gt-green/[0.14]"
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="rounded-[10px]" alignItemWithTrigger={false}>
          {options.map((o) => (
            <SelectItem
              key={o.value}
              value={o.value}
              className="text-[14px] focus:bg-[#e7f3ee] focus:text-gt-navy"
            >
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
