import * as React from 'react';
import { View } from 'react-native';
import type { SelectProps } from './types';
import { Portal, PortalProvider } from '@gorhom/portal';

export const Select = React.memo(({ children }: SelectProps) => {
  const viewRef = React.useRef<View>(null);

  return (
    <PortalProvider>
      <View ref={viewRef} collapsable={false}>
        <Portal>{children}</Portal>
      </View>
    </PortalProvider>
  );
});

Select.displayName = 'Select';
