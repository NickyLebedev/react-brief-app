import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import ManageCourses from './components/Courses/ManageCourse';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="courses" component={Courses} />
        <Route path="course" component={ManageCourses} />
        <Route path="course/:id" component={ManageCourses} />
        <Route path="about" component={About} />
    </Route>
);