import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Slider } from '@mui/material';

const SliderSet = ({ onChangeCommitted, value, steps, isTime }) => {
  const { t } = useTranslation();

  const marks = steps.map((value, index) => (
    { label: value, value: index }
  ));

  const valueLabelFormat = (value) => {
    if (!isTime) return value;
    if (value === 0) return t('settings.timers.option-label-off');
    return t('settings.timers.option-label-timeslot', { value });
  }

  const [step, setStep] = useState(
    steps.indexOf(value)
  );
  const handleChange = (event, step) => setStep(step);

  const handleOnChangeCommitted = (event, value) => (
    onChangeCommitted(event, steps[value])
  );

  return (
    <Slider
      value={step}
      marks={marks}
      max={steps.length-1}
      getAriaValueText={valueLabelFormat}
      valueLabelFormat={valueLabelFormat}
      min={0}
      step={1}
      scale={(value) => steps[value]}
      valueLabelDisplay="auto"
      onChange={handleChange}
      onChangeCommitted={handleOnChangeCommitted}
    />
  );
};

export default SliderSet;

// TODO: Dedup with components/general/SliderTimer.js