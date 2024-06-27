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

import { MEDITATION_MINUTES_STEPS } from '../../../../../config';

const SliderSetTime = ({
  actionData,
  handleActionDataChange,
}) => {
  const { t } = useTranslation();

  const { action, command } = getActionAndCommand(actionData);
  const [iterations, wait_minutes] = getArgsValues(actionData);

  const onChangeCommitted = (event, wait_minutes) => {
    handleActionDataChange(action, command, { iterations, wait_minutes })
  };

  return (
    <Grid container alignItems="center" sx={{ marginTop: '20px' }}>
      <Grid item xs={12}>
        <Typography>
          {t('cards.controls.actions.meditation.seconds')}
        </Typography>
        <SliderSet
          value={wait_minutes || 0}
          onChangeCommitted={onChangeCommitted}
          steps={MEDITATION_MINUTES_STEPS}
          isTime={true}
        />
      </Grid>
    </Grid>
  );
};

export default SliderSetTime;
