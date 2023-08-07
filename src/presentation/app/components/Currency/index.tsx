import {Input} from 'reactstrap';
import IntlCurrencyInput from 'react-intl-currency-input';

const currencyConfig = {
  locale: 'pt-BR',
  formats: {
    number: {
      BRL: {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

export const Currency = ({...rest}) => {
  return (
    <Input
      tag={IntlCurrencyInput}
      currency='BRL'
      config={currencyConfig}
      aria-label='currency-input'
      {...rest}
    />
  );
};
