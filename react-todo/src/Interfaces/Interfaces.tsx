export interface IWeatherData {
  weatherConditionImageUrl: string;
  temperature: string;
  city: string;
  showLoader: boolean;
}
export interface ILocationCurrent {
  latitude: string;
  longitude: string;
}
export interface ITodoItem {
  id: number;
  title: string;
  type: string;
  dueDate: string;
  status: string;
}
export interface ILoader {
  loaderHandler: () => void;
}
