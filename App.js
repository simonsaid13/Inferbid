import { StatusBar } from 'expo-status-bar';
import EntryView from './components/EntryView';

export default function App() {
  return (
    <>
      <EntryView />
      <StatusBar style="auto" />
    </>
  );
}
