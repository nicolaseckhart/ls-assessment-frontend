export interface Place {
  id: string;
  name: string;
  address: string;
  openingHours: DailyOpeningHours[];
}

export interface DailyOpeningHours {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  openDuring: string[];
}
