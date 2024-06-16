import type React from 'react';

export interface SelectProps {
  visible: boolean;
  children: React.ReactNode;
}

export interface SelectItemProps {
  onValueChange: (value: string) => void;
}
