import { debounce } from 'moderndash';
import { useState, useMemo, useCallback } from 'react';

type UseInputParams<T> = {
  initialValue: T;
  validation?: (val: T) => boolean | Promise<boolean>;
};

const getDefaultParams = <T>(type: T) => {
  if (typeof type === 'number')
    return {
      initialValue: 0,
    };
  return {
    initialValue: '',
  };
};

export const useInput = <T>(params?: UseInputParams<T>) => {
  const defaultParams = params ?? getDefaultParams('');
  const [value, setValue] = useState(defaultParams.initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const isValid = useMemo(() => {
    if (params?.validation) return params.validation(value as T);
    return true;
  }, [value]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
    if (!isDirty && value !== defaultParams.initialValue) {
      setIsDirty(true);
    }
  }, []);

  return {
    onChange,
    value,
    isDirty,
    isValid,
  };
};
