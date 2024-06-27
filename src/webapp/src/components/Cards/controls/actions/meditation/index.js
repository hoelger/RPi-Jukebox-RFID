import React from 'react';

import CommandSelector from '../../command-selector';
import SliderSetTime from './slider-set-time';
import SliderSetIterations from './slider-set-iterations';

import { getActionAndCommand, getCommandArgKeys } from '../../../utils';

const SelectMeditation = ({
  actionData,
  handleActionDataChange,
}) => {
  const { command } = getActionAndCommand(actionData);
  const argKeys = getCommandArgKeys(command);

  return (
    <>
      <CommandSelector
        actionData={actionData}
        handleActionDataChange={handleActionDataChange}
      />
      {argKeys.includes('wait_minutes') &&
        <SliderSetTime
          actionData={actionData}
          handleActionDataChange={handleActionDataChange}
        />
      }
      {argKeys.includes('iterations') &&
        <SliderSetIterations
          actionData={actionData}
          handleActionDataChange={handleActionDataChange}
        />
      }
    </>
  );
};

export default SelectMeditation;