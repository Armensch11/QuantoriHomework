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
  id: string;
  title: string;
  type: string;
  dueDate: string;
  status: string;
  task: string;
}
export interface ILoader {
  loaderHandler: () => void;
}
