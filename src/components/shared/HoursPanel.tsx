import { businessHours, hoursLabel } from "@/data/business";

export function HoursPanel() {
  return (
    <div>
      <p className="font-semibold text-navy">{businessHours.workingDays}</p>
      <p className="mt-1">{hoursLabel()}</p>
    </div>
  );
}
