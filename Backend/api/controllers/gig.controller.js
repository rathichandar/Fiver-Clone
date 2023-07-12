import Gig from "../models/gig.model.js"
import createError from "../utils/createError.js"


export const createGig = async (req,res,next)=>{
    if(!req.isSeller) return next(createError(403,"only for the seller"))

    const newGig = new Gig({
        userId:req.userId,
        ...req.body,
    });

    try {
        const savedGig = await newGig.save()
        res.status(201).json(savedGig)  
    } catch (error) {
        next(error)
    }
} 
export const deleteGig = async (req,res,next)=>{
    try {
        const gig = await Gig.findById(req.params.id)
        if(gig.userId !== req.userId) return next(createError(403,"you can delete only your gig"))
        await Gig.findByIdAndDelete(req.params.id);
        res.status(200).send("Gig deleted")

    } catch (error) {
        next(error)
    }
} 
export const getGig = async (req,res,next)=>{
    try {
        const gig = await Gig.findById(req.params.id)

        if(!gig) return next(createError(404,"No gig exist"))
        res.status(200).send(gig)
    } catch (error) {
        next(error)
    }
} 
export const getGigs = async(req,res,next)=>{
try {
    const q = req.query;

    const filters = {
        ...(q.userId && {userId:q.userId}),
        ...(q.cat && {cat:q.cat}),
        ...((q.min || q.max) && {
            price:{...(q.min && {$gt : q.min}), ...(q.max && {$lt : q.max})} 
        } ),
         ...(q.search && {title:{$regex:q.search ,$options:"i"}})
    }
    const gig = await Gig.find(filters)
    if(!gig) return next(createError(404,"No gig exist"))
    res.status(200).send(gig)
} catch (error) {
    next(error)
}
} 