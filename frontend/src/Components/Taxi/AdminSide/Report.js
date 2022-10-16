import React, { Component } from "react";

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable';

export default class PdfGenerator extends Component{
    constructor(props){
        super(props)
        this.state = {
            bookDetails: props.data,
        }
    }

    // jsPdfGenerator = () => {
    //     //new document
    //     var doc = new jsPDF('p', 'pt');

    //     //add some text
    //     doc.text(20,20, 'Available Bookings Report')

    //     //set the font of the pdf document
    //     doc.setFont('courier');

    //     //set the font type
    //     //doc.setFontType('normal')

    //     doc.text(20,30, 'Text With Courier Font')

    //     //save
    //     doc.save("name.pdf");
    // }

    getBody(data){
        console.log(`getting Data: ${data}`);
        if(data !== undefined && data.length > 0 ){
            return (data && data.map((b, index) => {
                return [index+1, b.taxiType, b.startDate, b.endDate, b.location, b.time];
            }))
        }
    }

    generateReport = () => {
        var doc = new jsPDF('p', 'pt', 'a4');

        const dd = this.getBody(this.state.bookDetails);
        console.log(dd);

        doc.text(40,40, 'Available Taxi Bookings Report')
        autoTable(doc,{
            startY:50,
            head: [['No', 'Taxi Type', 'Start', 'End', 'Location', 'Time']],
            body: [
                ['1', 'Jeep', '2022-10-27', '2022-10-29', 'Gampaha', '09:53'],
                ['2', 'Car', '2022-10-28', '2022-10-29', 'Matara', '09:53'],
                ['3', 'Car', '2022-10-29', '2022-10-30', 'Matara', '09:53'],
                ['4', 'Van', '2022-10-30', '2022-10-30', 'Colombo', '09:53'],
            ]
            // body: dd
        })

        doc.save("Available Taxi Booking Report.pdf");
    }

    render(){
        return(
            // <button onClick={this.jsPdfGenerator}>Generate PDF</button>
            <button onClick={this.generateReport} className='download-btn'> Generate Report</button>
        )
    }
}