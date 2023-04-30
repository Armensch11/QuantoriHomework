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
export interface ITodoTypes {
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
export interface IBorders {
  work: string;
  health: string;
  home: string;
  other: string;
  [key: string]: string;
}
