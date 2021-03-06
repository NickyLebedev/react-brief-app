import React, { Component, PropTypes } from 'react';
import TextInput from '../Common/TextInput';
import SelectInput from '../Common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title} />
            
            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select author"
                options={allAuthors}
                onChange={onChange} error={errors.authorId} />

            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category} />

            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length} />
            
            <input
                type="submit"
                disabled={loading}
                value={loading ? 'Saving..' : 'Save'}
                onClick={onSave}
                className="btn btn-primary"/>
        </form>
    );
};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    allAuthors: PropTypes.array,
    onClick: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};

export default CourseForm;