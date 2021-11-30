import React from 'react';

import { AuthenticatedUserProvider } from './AuthenticatedUserProvider';
import RootNavigator from './RootNavigator';

/**
 * Wrap all providers here
 */

export default function Routes({colorScheme}) {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator colorScheme={colorScheme}/>
    </AuthenticatedUserProvider>
  );
}
