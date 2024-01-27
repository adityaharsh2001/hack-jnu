import  {create} from 'zustand';

export const useStore = create((set) => ({
    user:{},
    setUser: (user) => set({user}),
    data:{},
    setData:(data)=>set({data}),
    predictedData:{},
    setPredictedData:(predictedData)=>set({predictedData})
}));



