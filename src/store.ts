import create, { SetState } from 'zustand';

const getRandom = () => Math.floor(Math.random() * 100 + 1);

const getTimeMinutes = () => {
  const today = new Date();

  return today.getHours() + ':' + today.getMinutes();
};

const getTimeSeconds = () => {
  const today = new Date();

  return today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
};

const getDay = () => {
  const today = new Date();
  const date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  return date;
};

interface ICommonStoreState {
  data: number;
  generate: () => void;
}

interface ITimeStoreState {
  timeInSeconds: string;
  timeInMinutes: string;
  day: string;
  generate: () => void;
}

export const useTemparature = create<ICommonStoreState>(
  (set: SetState<ICommonStoreState>) => ({
    data: 12,
    generate: () => set(() => ({ data: getRandom() })),
  }),
);

export const useWalkedFor = create<ICommonStoreState>(
  (set: SetState<ICommonStoreState>) => ({
    data: 100,
    generate: () => set(() => ({ data: getRandom() })),
  }),
);

export const useTime = create<ITimeStoreState>(
  (set: SetState<ITimeStoreState>) => ({
    timeInSeconds: '',
    timeInMinutes: '',
    day: '',
    generate: () =>
      set(() => ({
        timeInSeconds: getTimeSeconds(),
        timeInMinutes: getTimeMinutes(),
        day: getDay(),
      })),
  }),
);
