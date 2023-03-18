import React, { useMemo, useState } from 'react';
import st from './QuizSelectPage.module.css';
import MInput from '../../UI-Components/MInput/MInput'
import QuizList from '../../Components/QuizList/QuizList';
import MSelect from '../../UI-Components/MSelect/MSelect';
import BPan from '../../Pages/MainPage/Images/BPan.png'
const QuizSelectPage = () => {


    const [quizes, setQuizes] = useState([
        {id: 1, 
        title: 'Экскурсия по Африке', 
        disc:'3 Это пробная карточка одно из квизов и описание к нему, где можно расскаазать, о чём будет квиз.',
        quests: 6,
        points: 100,
        imgSRC:BPan, 
        type:'quiz1'
    },
    {id: 2, 
        title: 'Экскурсия по России', 
        disc:'2 Это пробная карточка одно из квизов и описание к нему, где можно расскаазать, о чём будет квиз.',
        quests: 6,
        points: 100,
        imgSRC:BPan,
        type:'quiz2'
    },
    {id: 3, 
        title: 'Экскурсия по Азии', 
        disc:'1 Это пробная карточка одно из квизов и описание к нему, где можно расскаазать, о чём будет квиз.',
        quests: 6,
        points: 100,
        imgSRC:BPan,
        type:'quiz3'
    }
    ])

    const [selectedSort, setSelectedSort] = useState('');
    const sortSelectedHandler = (e) =>{
        setSelectedSort(e.target.value)
    }
    const [searchQuery, setSearchQuery] = useState('');
    
    const sortedQuizes = useMemo(()=>{
       const arr = selectedSort ?  quizes.filter((quiz)=>quiz.type === selectedSort) :quizes; 
       return searchQuery ? arr.filter(quiz=> quiz.title.includes(searchQuery)) : arr;
    },[selectedSort, quizes, searchQuery])

    console.log(quizes.filter(quiz=> quiz.title.includes(searchQuery)))

    return (
        
        <div className={st.MainQuizPage}>
            <div className={st.SearchBlock}>
                <h2 className={st.SearchBlockHeader}>НАЙДИТЕ МНОГО УВЛЕКАТЕЛЬНЫХ ИГР</h2>
                    <div className={st.Control}>
                        <MSelect
                        style={{width:'400px', marginLeft:'25px'}}
                        defaulValue='Тип квиза'
                        value={selectedSort}
                        onChange={(e)=>sortSelectedHandler(e)}
                        options={[
                            {value: 'quiz1', name:'Тип 1'},
                            {value: 'quiz2', name:'Тип 2'},
                            {value: 'quiz3', name:'Тип 3'},
                            {value: '', name:'Отменить сортировку'},
                        ]}
                        />
                    <MInput 
                    value={searchQuery}
                    onChange={e=>setSearchQuery(e.target.value)}
                    style={{marginTop:'25px',marginBottom:'25px'}}
                    placeholder='Введите название'
                    type='text'
                    />
                    </div>
                    <p className={st.SearchBlockDisc}>Воспользуйтесь поиском, чтобы найти квизы своих друзей и посоревноваться в знаниях географических объектов!</p>
            </div>
            <div>
                <QuizList searchQuery={searchQuery} sortedAndSearchedQuiz={sortedQuizes} quizes={quizes}/>
            </div>
        </div>
    );
};

export default QuizSelectPage;