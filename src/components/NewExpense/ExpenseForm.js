import './ExpenseForm.css';

function ExpenseForm(){
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label for='titleInput'>Título</label>
          <input type='text' id='titleInput' />
        </div>
        <div className='new-expense__control'>
          <label for='amountInput'>Valor</label>
          <input type='number' id='amountInput' min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label for='dateInput'>Data</label>
          <input type='date' id='dateInput' min='2022-01-01' max='2022-12-31' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Adicionar Despesa</button>
      </div>
    </form>
  );
};

export default ExpenseForm;