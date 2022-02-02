import React from 'react';
import BookCard from '../../components/BookCard';
import Climate from '../../assets/how-to-avoid-climate-disaster.jpg'
import AtomicHabits from '../../assets/atomic-habits.jpg'

const BooksContainer = () => {
    return (
        <div className="books-container">
            <h1 className="bc-title">Book Recommendations</h1>
            <BookCard disp={Climate} height="110px" width="80px" title="How To Avoid A Climate Disaster" author="Bill Gates" desc="Helps you understand more about the climate emergency we're living and the actions we must take."/>
            <BookCard disp={AtomicHabits} height="110px" width="75px" title="Atomic Habits" author="James Clear" desc="This book gives you an excellent framework to start creating healthy habits and ditch the ones you don't want." />
        </div>
    );  
};

export default BooksContainer;