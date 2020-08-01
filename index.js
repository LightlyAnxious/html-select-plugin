import './select/style.scss';
import { Select } from './select/select';

const select = new Select('#select', {
  placeholder: 'Choose the option',
  selectedId: '1',
  data: [
    { id: '1', value: 'Text1' },
    { id: '2', value: 'Text2' },
    { id: '3', value: 'Text3' },
  ],
  onSelect(item) {
    console.log(item.value);
    return item.value;
  },
});
