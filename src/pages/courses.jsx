import Head from 'next/head'
import React, { useState } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Jumbotron from '../components/common/Jumbotron'
import CourseCard from '../components/CourseCard'
import DescriptionCard from '../components/DescriptionCard'

const Courses = () => {
    const coursesDescription = [
        {
            title: "BASIC COMPUTER COURSE",
            descriptions: ["Basic fundamental, MS Paint, Keyboard Keys, Microsoft Word, Microsoft Excel,   Microsoft Power Point, File Management, Desktop Editing, Shortcut Keys. Internet:- Searching information and images, Prepare file & Project,  Printout, Create & sending email etc."],
            img: "/assets/images/course_6.jpg",
            imgPos: "right",
            duration: "2 Months"
        },
        {
            title: "ADVANCE EXCEL & INTERNET",
            descriptions: ["Advance Internet:- Scanning documents, Railway Ticket booking, Govt. Jobs Online Form. Advance Excel:-      Vlookup, H lookup , Consolidate, Data Filter, Chart/Graph, Pivot Table,  Conditional Formatting. Salary Slip, Data Entry , Company Work."],
            img: "/assets/images/course_5.jpg",
            imgPos: "left",
            duration: "10 Days"
        },
        {
            title: "TALLY ERP 9",
            descriptions: ["Basic fundamental of Accounting, Entries in Register, Company information, create delete and alteration of company, Accounting information: Groups and Ledger. Accounting Voucher:- Contra, Payment, Receipt, Sale, Purchase, Journal, Debit Note, Credit Note. Inventory:- Stock Group, Units of Measure, Stock item. GST (Goods and Service Tax):- Sale bill, Purchase Bill.  Balance Sheet, Inventory Report, Profit & Loss A/c. Statement of Account, Tax deduction at source (TDS). Payroll:- Employee Group, Pay head, Employees, Salary detail, Payroll Voucher. Basic knowledge of internet."],
            img: "/assets/images/course_6.jpg",
            imgPos: "right",
            duration: "3 Months"
        },
        {
            title: "COMPUTER REPARING",
            descriptions: ["Basic Information of Computer Parts:- Motherboard, RAM, CPU, Hard Disk, SMPS etc. Computer Assembling, Booting process and System setup, Create partition and formatting the partition, windows installation(Windows XP, Windows 7, Windows 8, Windows 10), Software Installation (System software and Application software), Desktop editing and File Management, Manage Computer Console, Administrative Rights , User creation and setting, Password Policy, Disk partition from Manage Console, Antivirus installation, Printer installation (inkjet & LaserJet)"],
            img: "/assets/images/course_5.jpg",
            imgPos: "left",
            duration: "2 Months"
        },
        {
            title: "PHOTOSHOP & COREL DRAW",
            descriptions: ["Opening new files, existing files, exploring the toolbox, Application Bar, Exploring panels & Menus, creating & viewing a new document. Zooming & panning an image rulers, guides undoing, steps with history , color correction, understanding pixels & resolution, Cropping & straightening an image, adjusting canvas size and canvas rotation. Elliptical marquee tool, using magic wand & free hand tool, combining selection, magnetic polygonal lasso tool. Quick selection & refine edge, modify selection, understanding the background layer. Creating, selecting, linking & deleting layers. Blending modes, opacity & fill, creating modifying text."],
            img: "/assets/images/course_6.jpg",
            imgPos: "right",
            duration: "2 Months"
        },
        {
            title: "AUTOCAD  MECHANICAL",
            descriptions: ["1. Creating a Simple Drawing  Getting Started with AutoCAD, Starting AutoCAD, AutoCAD's Screen Layout, Working with Commands, Opening an Existing Drawing File, Saving Your Work. Basic Drawing & Editing Commands Drawing Lines, Erasing Objects, Drawing Lines with Polar Tracking, Drawing Rectangles, Drawing Circles, Viewing Your Drawing, Undoing and Redoing Actions.",
                "2. Making Your Drawings More Precise Drawing Precision in AutoCAD  Using Object Snap, Object Snap Overrides, Polar Tracking Settings, Object Snap Tracking, Drawing with SNAP and GRID, Making Changes in Your Drawing: Selecting Objects for Editing , Moving Objects, Copying Objects, Rotating Objects, Scaling  P Objects, Mirroring Objects, Editing Objects with Grips.",
                "3. Drawing Organization and Information Organizing Your Drawing with Layers, Creating New Drawings With Templates, What are Layers? Layer State, Changing an Object's Layer. Advanced Object Types: Drawing Arcs, Drawing Polylines, Editing Polylines , Drawing Polygons, Drawing Ellipses, Getting Information From Your Drawing, Measuring Objects, Working with Properties.",
                "4. Creating More Complex Objects  Advanced Editing Commands, Trimming and Extending, Stretching Objects , Creating Fillets and Chamfers, Offsetting Objects, Creating Arrays of Objects, Inserting Blocks , What are Blocks, Inserting Blocks from Tool Palettes?, Inserting Blocks using Insert, Inserting Blocks with Design Center.",
                "5. Preparing to Print Setting Up a Layout, Printing Concepts, Creating Viewports, Setting up Layouts Guidelines for Layouts, Printing Your Drawing, Printing Layouts, Printing a Check Plot.",
                "6. Annotating Your Drawing  Text , Working with Annotations, Adding Text in a Drawing , Modifying Multiline Text  Formatting Multiline Text , Hatching, Hatching, Adding Dimensions, Dimensioning Concepts, Adding Linear Dimensions, Adding Radial and Angular Dimensions, Editing Dimensions, Adding Notes to Your Drawing.",
                "7. Beyond the Basics  Working Effectively with AutoCAD, Setting up the Interface, Using the Keyboard Effectively, Working in Multiple Drawings, Using Grips Effectively, Additional Layer Tools, Accurate Positioning, Coordinate Entry, Locating Points with Tracking, Construction Lines, Placing Reference Points.",
                "8. Creating and Organizing Blocks Creating Blocks,  Creating Blocks, Editing Blocks, Removing Unused Elements, Blocks in Tool Palettes, Adding Blocks to Tool Palettes, Modifying Tool Properties in Tool Palettes."
            ],
            img: "/assets/images/course_5.jpg",
            imgPos: "left",
            duration: "1-2 Months"
        },
    ]
    return (
        <div className='site-section '>
            <Head>
                <title>Courses - Bit Education</title>
            </Head>
            <Jumbotron title='Our Courses' />
            <Breadcrumb currentPage='Courses' />
            <div className="">
                <div className="container">
                    <div className="row">
                        {/* {courses.map((course, i) => <CourseCard key={i} course={course} />)} */}
                        {coursesDescription.map((service, i) => <DescriptionCard key={i} data={service} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses