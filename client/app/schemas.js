import { Schema, arrayOf, normalize } from 'normalizr'

const RelationSchema = new Schema('edges', {
    idAttribute: 'id'
})
const CollectionRelationSchema = new Schema('collectionEdges', {
    idAttribute: 'id'
})

const CollectionSchema = new Schema('collections', {
    idAttribute: 'id',
})

const NodeSchema = new Schema('nodes', {
    idAttribute: 'id'
})

NodeSchema.define({
    // from: arrayOf(RelationSchema),
    // to: arrayOf(RelationSchema),
    collections: arrayOf(NodeSchema),
    edges: arrayOf(RelationSchema), // edges going out from this node
})

CollectionSchema.define({
    nodes: arrayOf(NodeSchema),
    edges: arrayOf(CollectionRelationSchema), // edges going out from this collection to another collection
    collections: arrayOf(CollectionSchema), // top-level parent collections
})


export default {
    NODE: NodeSchema,
    NODE_ARRAY: arrayOf(NodeSchema),
    COLLECTION: CollectionSchema,
    COLLECTION_ARRAY: arrayOf(CollectionSchema),
    EDGE: RelationSchema,
    EDGE_ARRAY: arrayOf(RelationSchema),
    COLLECTION_EDGE: CollectionRelationSchema,
}
