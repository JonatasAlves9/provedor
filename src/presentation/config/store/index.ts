// Component
import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from './dashboard/counterSlice';
// import {taskSlice} from '@/presentation/config/store/task/taskSlice';
// import {personSlice} from '@/presentation/config/store/persons/personSlice';
// import {coursesSlice} from '@/presentation/config/store/courses/coursesSlice';
// import {questionSlice} from '@/presentation/config/store/questions/questionSlice';
// import {intershipSlice} from '@/presentation/config/store/intership/intershipSlice';
import {organizationSlice} from '@/presentation/config/store/organization/organizationSlice';
// import {ratingCriteriasSlice} from '@/presentation/config/store/ratingCriteria/ratingCriteriaSlice';
import {organizationTypesSlice} from '@/presentation/config/store/organization/organizationTypesSlice';
// import {ratingCriteriaSubQuestionSlice} from './ratingCriteriaSubQuestions/ratingCriteriaSubQuestionsSlice';
// import {assessmentQuestionSlice} from '@/presentation/config/store/assessmentQuestions/assessentQuestionsSlice';

// Import

export const store = configureStore({
  reducer: {
    // tasks: taskSlice.reducer,
    // persons: personSlice.reducer,
    counter: counterSlice.reducer,
    // courses: coursesSlice.reducer,
    // questions: questionSlice.reducer,
    // interships: intershipSlice.reducer,
    organizations: organizationSlice.reducer,
    // ratingCriterias: ratingCriteriasSlice.reducer,
    organizationTypes: organizationTypesSlice.reducer,
    organizationInsure: organizationTypesSlice.reducer,
    // assessmentQuestion: assessmentQuestionSlice.reducer,
    // ratingCriteriaSubQuestion: ratingCriteriaSubQuestionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
