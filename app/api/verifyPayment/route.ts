import crypto from 'crypto';

export async function POST(request: Request){
    const body = await request.json();
    const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = body;

    const generatedSignature =
        crypto
        .createHmac("sha256", process.env.KEY_SECRET!)
        .update(razorpay_order_id + "|" + razorpay_payment_id)
        .digest("hex");

    const isValid = razorpay_signature === generatedSignature;

    return Response.json({ success: isValid });
}
