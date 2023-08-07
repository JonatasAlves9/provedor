import React from 'react';
import {createRoot} from 'react-dom/client';
// Axios
import {Chart, registerables} from 'chart.js';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
// Apps
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './config/assets/css/style.rtl.css'
 **/
import {AuthProvider} from '@/presentation/app/hooks/useAuth';
import {Provider} from 'react-redux';
import {store} from '@/presentation/config/store';
import {Router} from '@/main/routing';
import ThemeProvider from '@/presentation/config/layout/provider/Theme';
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
Chart.register(...registerables);

// lottie animations
import lottie from 'lottie-web';
import {defineElement} from 'lord-icon-element';

defineElement(lottie.loadAnimation);

const queryClient = new QueryClient();
const container = document.getElementById('main');
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Provider store={store}>
          <AuthProvider>
            <Router />
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
