import { IChip } from "./Chip.definitions";
import './Chip.scss';

export const Chip = (props: IChip) => {
    const {
        label
    } = props;
  return (
    <span className="chip">{label}</span>
  )
}

export default Chip;
