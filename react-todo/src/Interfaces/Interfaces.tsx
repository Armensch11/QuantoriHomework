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
  date: string;
  status: string;
  task: string;
}
export interface ILoader {
  loaderHandler: () => void;
}
export interface TodoTypes {
  work: {
    color: string;
    background: string;
  };
  health: {
    color: string;
    background: string;
  };
  home: {
    color: string;
    background: string;
  };
  other: {
    color: string;
    background: string;
  };
  [key: string]: {
    color: string;
    background: string;
  };
}
