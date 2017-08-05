import React from 'react';
import ReactDOM from 'react-dom';

// import Info from './app/components/Info';
import Menu from './app/components/Menu';
import Articles from './app/components/Articles';
import Login from './app/components/Login';

const app = document.getElementById('app');


// <Пункты меню>
let itemsMenu = [
    {
        title: 'Главная',
        link: '#',
        class: ''
    },
    {
        title: 'Статьи',
        link: '#',
        class: ''
    },
    {
        title: 'Блог',
        link: '#',
        class: 'active'
    },
    {
        title: 'Контакты',
        link: '#',
        class: ''
    },
    {
        title: 'О нас',
        link: '#',
        class: ''
    }
];
// </Пункты меню>


// <Статьи>
let itemsArticles = [
    {
        title: 'Статья 1',
        author: 'Саша',
        image: 'http://wiki.western.edu/mcis/images/e/e0/React.png',
        text: 'Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета.'
    },
    {
        title: 'Статья 2',
        author: 'Петя',
        image: 'http://blogs.quovantis.com/wp-content/uploads/2017/01/React-JS-ES6-Setup-01-300x100.png',
        text: 'Самым известным «рыбным» текстом является знаменитый Lorem ipsum. Считается, что впервые его применили в книгопечатании еще в XVI веке. Своим появлением Lorem ipsum обязан древнеримскому философу Цицерону, ведь именно из его трактата «О пределах добра и зла» средневековый книгопечатник вырвал отдельные фразы и слова, получив текст-«рыбу», широко используемый и по сей день. Конечно, возникают некоторые вопросы, связанные с использованием Lorem ipsum на сайтах и проектах, ориентированных на кириллический контент – написание символов на латыни и на кириллице значительно различается.'
    },
    {
        title: 'Статья 3',
        author: 'Иван',
        image: 'http://joshujah.com/images/react-router.png',
        text: 'И даже с языками, использующими латинский алфавит, могут возникнуть небольшие проблемы: в различных языках те или иные буквы встречаются с разной частотой, имеется разница в длине наиболее распространенных слов. Отсюда напрашивается вывод, что все же лучше использовать в качестве «рыбы» текст на том языке, который планируется использовать при запуске проекта. Сегодня существует несколько вариантов Lorem ipsum, кроме того, есть специальные генераторы, создающие собственные варианты текста на основе оригинального трактата, благодаря чему появляется возможность получить более длинный неповторяющийся набор слов.'
    },
    {
        title: 'Статья 4',
        author: 'Вася',
        image: 'http://wiki.western.edu/mcis/images/e/e0/React.png',
        text: 'Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета.'
    },
    {
        title: 'Статья 5',
        author: 'Петя',
        image: 'http://blogs.quovantis.com/wp-content/uploads/2017/01/React-JS-ES6-Setup-01-300x100.png',
        text: 'Самым известным «рыбным» текстом является знаменитый Lorem ipsum. Считается, что впервые его применили в книгопечатании еще в XVI веке. Своим появлением Lorem ipsum обязан древнеримскому философу Цицерону, ведь именно из его трактата «О пределах добра и зла» средневековый книгопечатник вырвал отдельные фразы и слова, получив текст-«рыбу», широко используемый и по сей день. Конечно, возникают некоторые вопросы, связанные с использованием Lorem ipsum на сайтах и проектах, ориентированных на кириллический контент – написание символов на латыни и на кириллице значительно различается.'
    },
    {
        title: 'Статья 6',
        author: 'Иван',
        image: 'http://joshujah.com/images/react-router.png',
        text: 'И даже с языками, использующими латинский алфавит, могут возникнуть небольшие проблемы: в различных языках те или иные буквы встречаются с разной частотой, имеется разница в длине наиболее распространенных слов. Отсюда напрашивается вывод, что все же лучше использовать в качестве «рыбы» текст на том языке, который планируется использовать при запуске проекта. Сегодня существует несколько вариантов Lorem ipsum, кроме того, есть специальные генераторы, создающие собственные варианты текста на основе оригинального трактата, благодаря чему появляется возможность получить более длинный неповторяющийся набор слов.'
    }
];
// </Статьи>


class App extends React.Component {
    render() {

        return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <Menu items={itemsMenu} title="Блог" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <Articles items={itemsArticles} />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-4" />
                            <div className="col-xs-4">
                                <Login />
                            </div>
                            <div className="col-xs-4" />
                        </div>
                    </div>
                </div>
        );
    }
}


ReactDOM.render(
    <App />,
    app
);