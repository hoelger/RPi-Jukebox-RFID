import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Grid,
  Typography,
} from '@mui/material';

import {
  getActionAndCommand,
  getArgsValues,
} from '../../../utils';
import SliderSet from './slider-set';

import { MEDITATION_ITERATIONS_STEPS } from '../../../../../config';

const SliderSetIterations = ({
  actionData,
  handleActionDataChange,
}) => {
  const { t } = useTranslation();

  const { action, command } = getActionAndCommand(actionData);
  const [iterations, wait_minutes] = getArgsValues(actionData);

  const onChangeCommitted = (event, iterations) => {
    handleActionDataChange(action, command, { iterations, wait_minutes })
  };

  return (
    <Grid container alignItems="center" sx={{ marginTop: '20px' }}>
      <Grid item xs={12}>
        <Typography>
          {t('cards.controls.actions.meditation.iterations')}
        </Typography>
        <SliderSet
          value={iterations || 0}
          onChangeCommitted={onChangeCommitted}
          steps={MEDITATION_ITERATIONS_STEPS}
        />
      </Grid>
    </Grid>
  );
};

export default SliderSetIterations;
