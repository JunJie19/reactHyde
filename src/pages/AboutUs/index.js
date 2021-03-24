import React, { Fragment } from 'react'
import { Row } from 'react-bootstrap'
import '../../styles/aboutus.css'
import AboutusImg from '../../img/photography-of-woman.jpg'
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from '../../components/Footer'

export default function index() {
    return (
        <Fragment>
            {/* About us */}
            <div className="aboutUs_container">

                <Grid container spacing={3} alignItems='center' justify='center'
                    style={{ width: '100%', margin: '0px' }} >
                    <Row>
                        <Grid item xs={12} sm={12} md={5} lg={4}  >
                            <LazyLoadImage src={AboutusImg} width='100%' height='100%' />
                        </Grid>

                        <Grid item xs={12} sm={12} md={7} lg={8}>
                            <div className="aboutus_Article">
                                <h1>Our Story</h1>
                                <section>
                                    With years of experience in technology-intensive fields, HIT understands the struggles that every researcher and professional faces when looking for collaborative opportunities and research-related support for their projects. HIT aims to unite highly talented researchers, investors and professionals in scientific and technological fields with the best possible opportunities and solutions sourced from numerous industry-leading organisations and research partners all around the world . HIT believes in the power of connections and is dedicated to expanding and maintaining its network of members through providing them with customised solutions. HIT strives to help facilitate its members’ goals and aspirations.
                                        </section>
                            </div>
                        </Grid>
                    </Row>
                </Grid>
            </div>

            {/* frequently question */}
            <div className="question_Container">
                <Grid container spacing={3} alignItems='center' justify='center'
                    style={{ width: '100%', margin: '0px' }} >
                    <div className="questionSite">
                        <h5>Still have questions?</h5>
                        <h2>Frequently asked question.</h2>
                    </div>

                    <Grid item xs={12} sm={12} md={10} lg={10} style={{ marginBottom: '5' }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography><h5>Do I need to be concerned with my Intellectual property right and the confidentiality of the information regarding my research project?</h5></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <p>
                                        The candidate will have the autonomy to determine how much information about his/her project/idea s/he is willing to share in the whole process. Hyde will not ask for any sensitive information. More importantly, both Hyde and the candidate's future partner/investor will guarantee the intellectual property (IP) of the candidate through further legal documents.</p>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={12} sm={12} md={10} lg={10} style={{ marginBottom: '5' }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography><h5>How much do I get to say in the selection of collaboration opportunities?</h5></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <p>
                                        The candidate will be able to directly participate in the entire negotiation process with the potential partners/investors and decide which offer(s) to accept. The candidate will have the full power in determining which of his/her project/idea will be cooperated with his/her future partners/investor and how.</p>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={12} sm={12} md={10} lg={10} style={{ marginBottom: '5' }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography><h5>Would get any help with the work visa application?</h5></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <p>
                                        Visa sponsorship is guaranteed. Additionally, Hyde will offer relevant information and advice regarding the visa application and will provide a certain level of support to the candidates.</p>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={12} sm={12} md={10} lg={10} style={{ marginBottom: '5' }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography><h5>Do I have to be physically working abroad?</h5></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <p>
                                        The work location can be negotiated with future investors or partners. Not all of the research projects and work opportunities require the researchers to physically be in China. Therefore, candidates have the option to remain in their current positions and work remotely on a project/part-time basis.</p>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>

            </div>

            <Footer />

        </Fragment >
    )
}
