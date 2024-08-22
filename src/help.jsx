import React from 'react';
import { Link } from 'react-router-dom';

export default function HelpPage() {
    return (
        <>
        <h1>
            Help Page
        </h1>
	<div>
	    <p> First, click on the add more button to get started. <br /> Once you have inputted all your purchases down, click on the submit button to tally up the total amount spent. <br /> This will also display a graph that will visualize the purchases made.
	    </p>
	</div>
	<div>
	There is an optional budgeting section which allows users to set themselves up for a budget <br /> 
	    and calculates how much money is leftover <br /> after all the purchases have been made. 
 	</div>

	<div>
	    Once everything has been updated, you can download a csv format of the form at the very top. 
	    </div>

	<div> 
	    Go back to 
	    <Link to='/forms'> forms </Link>.
	</div>
        </>
    )
}
