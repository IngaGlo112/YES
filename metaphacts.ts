[[!--
  This page is an "extension point" to override global subject templates and corresponding settings
  for asset editing (ontologies, vocabularies, etc).
--]]

[[!--
  Overrides for ontology subject templates and settings
--]]

[[!--
<template-fragment export id='ontologiesBaseIri'
  description='Base IRI for the ontologies'
  params='{}'
>https://ontologies.metaphacts.com/</template-fragment>
--]]

[[!--
<template-fragment export id='ontology'
  description='Subject template for an owl:Ontology'
  params='{
    "baseIri": {"type": "string"},
    "title": {"type": "string"},
    "version": {"type": "string"}
  }'
>{{baseIri}}{{title}}{{version}}</template-fragment>
--]]

[[!--
<template-fragment export id='ontologySettings'
  description='Subject template settings for an owl:Ontology'
  params='{}'
>{
  "placeholders": {
    "title": [{
      "transform": "sanitize",
      "replaceCharacter": "-"
    }, {
      "transform": "kebabCase"
    }],
    "version": [{
      "transform": "none",
      "default": "/0.1"
    }]
  }
}</template-fragment>
--]]

[[!--
<template-fragment export id='ontologyResource'
  description='Default subject template for ontology resources for which no specific fragment exists'
  params='{
    "namespace": {
      "type": "string",
      "description": "Ontology base namespace"
    }
  }'
>{{namespace}}{{[http://www.w3.org/2000/01/rdf-schema#label]}}</template-fragment>
--]]

[[!--
<template-fragment export id='ontologyResourceSettings'
  description='Default subject template settings for ontology resources for which no specific fragment exists'
  params='{
    "namespace": {
      "type": "string",
      "description": "Ontology base namespace"
    }
  }'
>{
  "placeholders": {
    "http://www.w3.org/2000/01/rdf-schema#label": [{
      "replaceCharacter": " ",
      "transform": "sanitize"
    }, {
      "transform": "pascalCase"
    }]
  }
}</template-fragment>
--]]

[[!--
<template-fragment export id='class'
  description='Subject template for an owl:Class'
  params='{
    "namespace": {
      "type": "string",
      "description": "Ontology base namespace"
    }
  }'
>{{namespace}}{{[http://www.w3.org/2000/01/rdf-schema#label]}}</template-fragment>
--]]

[[!--
<template-fragment export id='classSettings'
  description='Subject template settings for an owl:Class'
  params='{
    "namespace": {
      "type": "string",
      "description": "Ontology base namespace"
    }
  }'
>{
  "placeholders": {
    "http://www.w3.org/2000/01/rdf-schema#label": [{
      "replaceCharacter": " ",
      "transform": "sanitize"
    }, {
      "transform": "pascalCase"
    }]
  }
}</template-fragment>
--]]

[[!--
<template-fragment export id='datatypeProperty'
  description='Subject template for an owl:DatatypeProperty'
  params='{
    "namespace": {
      "type": "string",
      "description": "Ontology base namespace"
    }
  }'
>{{namespace}}{{[http://www.w3.org/2000/01/rdf-schema#label]}}</template-fragment>
--]]

[[!--
<template-fragment export id='datatypePropertySettings'
  description='Subject template settings for an owl:DatatypeProperty'
  params='{
    "namespace": {
      "type": "string",
      "description": "Ontology base namespace"
    }
  }'
>{
  "placeholders": {
    "http://www.w3.org/2000/01/rdf-schema#label": [{
      "replaceCharacter": " ",
      "transform": "sanitize"
    }, {
      "transform": "camelCase"
    }]
  }
}</template-fragment>
--]]

[[!--
<template-fragment export id='objectProperty'
  description='Subject template for an owl:ObjectProperty'
  params='{
    "namespace": {
      "type": "string",
      "description": "Ontology base namespace"
    }
  }'
>{{namespace}}{{[http://www.w3.org/2000/01/rdf-schema#label]}}</template-fragment>
--]]

[[!--
<template-fragment export id='objectPropertySettings'
  description='Subject template settings for an owl:ObjectProperty'
  params='{
    "namespace": {
      "type": "string",
      "description": "Ontology base namespace"
    }
  }'
>{
  "placeholders": {
    "http://www.w3.org/2000/01/rdf-schema#label": [{
      "replaceCharacter": " ",
      "transform": "sanitize"
    }, {
      "transform": "camelCase"
    }]
  }
}</template-fragment>
--]]

[[!--
<template-fragment export id='relationShape'
  description='Subject template for a shacl:PropertyShape for a relation between classes'
  params='{
    "namespace": {
      "type": "string",
      "description": "Ontology base namespace"
    }
  }'
>ontodia:blank:rdf:{{UUID}}</template-fragment>
--]]

[[!--
<template-fragment export id='relationShapeSettings'
  description='Subject template settings for a shacl:PropertyShape for a relation between classes'
  params='{
    "namespace": {
      "type": "string",
      "description": "Ontology base namespace"
    }
  }'
>{}</template-fragment>
--]]

[[!--
<template-fragment export id='attributeShape'
  description='Subject template for a shacl:PropertyShape for a class attribute'
  params='{
    "namespace": {
      "type": "string",
      "description": "Ontology base namespace"
    }
  }'
>ontodia:blank:rdf:{{UUID}}</template-fragment>
--]]

[[!--
<template-fragment export id='attributeShapeSettings'
  description='Subject template settings for a shacl:PropertyShape for a class attribute'
  params='{
    "namespace": {
      "type": "string",
      "description": "Ontology base namespace"
    }
  }'
>{}</template-fragment>
--]]

[[!--
<template-fragment export id='skosConstraintShape'
  description='Subject template for shacl:NodeShape for a vocabulary constraint'
  params='{
    "namespace": {
      "type": "string",
      "description": "Ontology base namespace"
    }
  }'
>{{namespace}}{{UUID}}</template-fragment>
--]]

[[!--
<template-fragment export id='skosConstraintShapeSettings'
  description='Subject template settings for shacl:NodeShape for a vocabulary constraint'
  params='{
    "namespace": {
      "type": "string",
      "description": "Ontology base namespace"
    }
  }'
>{}</template-fragment>
--]]

[[!--
  Overrides for vocabulary subject templates and settings
--]]

[[!--
<template-fragment export id='vocabulariesBaseIri'
  description='Base IRI for the vocabularies'
  params='{}'
>https://vocabularies.metaphacts.com/</template-fragment>
--]]

[[!--
<template-fragment export id='vocabulary'
  description='Subject template for a SKOS vocabulary'
  params='{
    "baseIri": {"type": "string"},
    "title": {"type": "string"}
  }'
>{{baseIri}}{{title}}</template-fragment>
--]]

[[!--
<template-fragment export id='vocabularySettings'
  description='Subject template settings for a SKOS vocabulary'
  params='{}'
>{
  "placeholders": {
    "title": [{
      "transform": "sanitize",
      "replaceCharacter": "-"
    }, {
      "transform": "kebabCase"
    }]
  }
}</template-fragment>
--]]

[[!--
<template-fragment export id='vocabularyTerm'
  description='Subject template for a SKOS vocabulary term'
  params='{
    "namespace": {
      "type": "string",
      "description": "Vocabulary base namespace"
    },
    "prefLabel": {
      "type": "string",
      "description": "The preferred label of the new term"
    }
  }'
>{{namespace}}{{UUID}}</template-fragment>
--]]

[[!--
<template-fragment export id='vocabularyTermSettings'
  description='Subject template settings for a SKOS vocabulary term'
  params='{
    "namespace": {
      "type": "string",
      "description": "Vocabulary base namespace"
    },
    "prefLabel": {
      "type": "string",
      "description": "The preferred label of the new term"
    }
  }'
>{}</template-fragment>
--]]

[[!--
<template-fragment export id='vocabularyCollection'
  description='Subject template for a SKOS vocabulary collection'
  params='{
    "vocabularyIri": {
      "type": "string",
      "description": "Vocabulary IRI"
    },
    "namespace": {
      "type": "string",
      "description": "Vocabulary base namespace"
    },
    "prefLabel": {
      "type": "string",
      "description": "The preferred label of the new collection"
    }
  }'
>{{vocabularyIri}}/{{UUID}}</template-fragment>
--]]

[[!--
<template-fragment export id='vocabularyCollectionSettings'
  description='Subject template settings for a SKOS vocabulary collection'
  params='{
    "prefLabel": {
      "type": "string",
      "description": "The preferred label of the new collection"
    }
  }'
>{}</template-fragment>
--]]

[[!--
<template-fragment export id='vocabularyMappingBaseIri'
  description='Base IRI for the vocabulary mappings'
  params='{}'
>https://vocabularies.metaphacts.com/mappings/</template-fragment>
--]]

[[!--
<template-fragment export id='vocabularyMapping'
  description='Subject template for a vocabulary mapping'
  params='{
    "baseIri": {"type": "string"},
    "title": {"type": "string"}
  }'
>{{baseIri}}{{title}}</template-fragment>
--]]

[[!--
<template-fragment export id='vocabularyMappingSettings'
  description='Subject template settings for a vocabulary mapping'
  params='{}'
>{
  "placeholders": {
    "title": [{
      "transform": "sanitize",
      "replaceCharacter": "-"
    }, {
      "transform": "kebabCase"
    }]
  }
}</template-fragment>
--]]

[[!--
<template-fragment export id='schemaOntologyMappingBaseIri'
  description='Base IRI for the schema ontology mappings'
  params='{}'
>https://schemas.metaphacts.com/schema-ontology-mapping/</template-fragment>
--]]

[[!--
<template-fragment export id='schemaOntologyMapping'
  description='Subject template for a schema ontology mapping'
  params='{
    "baseIri": {"type": "string"},
    "title": {"type": "string"}
  }'
>{{baseIri}}{{title}}</template-fragment>
--]]

[[!--
<template-fragment export id='schemaOntologyMappingSettings'
  description='Subject template settings for schema ontology mapping'
  params='{}'
>{
  "placeholders": {
    "title": [{
      "transform": "sanitize",
      "replaceCharacter": "-"
    }, {
      "transform": "kebabCase"
    }]
  }
}</template-fragment>
--]]