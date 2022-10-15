import React, { PureComponent } from "react";

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable';

export default class PdfGenerator extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            bookDetails: this.props.data,
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

    generateReport = () => {
        // var doc = new jsPDF()
        var doc = new jsPDF('p', 'pt', 'a4');

        // var bodyData = this.state.bookDetails.map((b,index) => {
        //     return [index+1, b.taxiType, b.startDate, b.endDate, b.location, b.time];
        // })

        const bodyData = () => {
            console.log(this.state.bookDetails[0]);
            if(this.state.bookDetails !== undefined || this.state.bookDetails.length < 0 ){
                return this.state.bookDetails.map((b, index) => {
                    return [index+1, b.taxiType, b.startDate, b.endDate, b.location, b.time];
                })
            }
        }

        var data = bodyData();
        console.log(data);

        //add some text
        doc.text(40,40, 'Available Taxi Bookings Report')
        //doc.text(7, 15, "Overflow 'ellipsize' (default)");
        autoTable(doc,{
            startY:50,
            head: [['No', 'Taxi Type', 'Start', 'End', 'Location', 'Time']],
            body: data
        })

        doc.save("Available Taxi Booking Report.pdf");
    }

    render(){
        return(
            // <button onClick={this.jsPdfGenerator}>Generate PDF</button>
            <button onClick={this.generateReport}> Generate Report</button>
        )
    }
}