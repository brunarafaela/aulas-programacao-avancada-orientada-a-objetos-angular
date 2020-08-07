import { Main } from './main';
import { Weather } from './weather';

export class Previsao {
  public dt: number;
  public main: Main;
  public  weather: Weather[];
}
