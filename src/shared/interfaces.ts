export type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface Place {
  id: string;
  name: string;
  address: string;
  openingHours: DailyOpeningHours[];
}

export interface DailyOpeningHours {
  day: Day;
  openDuring: string[];
}

export interface CompactDailyHours {
  hours: string[];
  days: Day[];
}
