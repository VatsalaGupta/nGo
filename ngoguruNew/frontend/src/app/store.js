import { configureStore } from '@reduxjs/toolkit'
// import loginSignupAuthenFeatureReducer from '../features/loginSignupAuthenFeature'
// import homeSectionFeaturesReducer from '../features/homeSectionFeatures'
import newsFeaturesReducer from '../features/newsFeatures'
// import projectFeaturesReducer from '../features/projectFeatures'
// import activityFeaturesReducer from '../features/activityFeatures'
// import skillsFeaturesReducer from '../features/skillsFeatures'
// import galleryFeaturesReducer from '../features/galleryFeatures'
// import aboutFeaturesReducer from '../features/aboutFeatures'

export const store = configureStore({
  reducer: {
    // authentication:loginSignupAuthenFeatureReducer,
    // home:homeSectionFeaturesReducer,
    news:newsFeaturesReducer,
    // project:projectFeaturesReducer,
    // activity:activityFeaturesReducer,
    // skills:skillsFeaturesReducer,
    // gallery:galleryFeaturesReducer,
    // about:aboutFeaturesReducer
  },
})