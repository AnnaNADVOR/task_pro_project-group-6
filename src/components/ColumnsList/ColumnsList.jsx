import css from './ColumnsList.module.css';
import { useSelector } from 'react-redux';
import { selecColumnList } from '../../redux/boards/selectors';
import Column from './Column';

const ColumnsList = () => {
  const allColumns = useSelector(selecColumnList);

  return (
    <>
      <div className={css.columnsListContainer}>
        <ul className={css.columnList}>
          {allColumns?.map(column => (
            <li key={column._id} className={css.columnItem}>
              <Column id={column._id} title={column.title} column={column} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ColumnsList;
