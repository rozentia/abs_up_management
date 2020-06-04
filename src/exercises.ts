import * as exercisesLocal from '../data/exercises.json'

export interface Exercise {
  description: string;
  difficulty: number;
  equipment: Equipment;
  impact: boolean;
  intensity: number;
  name: string;
  sided: boolean;
  target: Target;
  weighted: boolean;
}

export enum Equipment {
  Barbell = "Barbell",
  Cable = "Cable",
  Dumbbell = "Dumbbell",
  ElasticBand = "Elastic Band",
  HangingBar = "Hanging Bar",
  None = "None",
  Partner = "Partner",
  PhysioBall = "Physio Ball",
  SmallBall = "Small Ball",
}

export enum Target {
  Core = "Core",
  Kegel = "Kegel",
  Lower = "Lower",
  Obliques = "Obliques",
  Rect = "Rect",
  Upper = "Upper",
}
