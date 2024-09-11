import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'Dead Face Clothing',
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
    {
      title: 'SLC Events',
      description: 'Events ',
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
    {
      title: 'Project 3',
      description: 'Description for project 3',
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
      </p>
      <CardGroup>
        {projects.map((project, index) => (
          <Card key={index}>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}