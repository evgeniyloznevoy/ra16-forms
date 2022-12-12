import './App.css';
import ConverterColor from './components/ConverterColor';
import StepsBook from './components/StepsBook';

function App() {
  return (
    <>
    <div className='container'>
      <div className='title'>Конвертер цветов</div>
      <ConverterColor color={'#9921ff'} />
      </div>
    <div className='container'>      
    <div className='title'>Учёт тренировок</div>
      <StepsBook trainings={[]}/>
    </div>
    </>
  );
}

export default App;