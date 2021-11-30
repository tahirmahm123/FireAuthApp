import React from 'react';
import useColorScheme from './hooks/useColorScheme';
import Routes from './navigation/index';

export default function App() {
  const colorScheme = useColorScheme();
  return <Routes colorScheme={colorScheme}/>;
}
