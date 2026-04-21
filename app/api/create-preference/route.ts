// app/api/create-preference/route.ts
import { NextRequest, NextResponse } from 'next/server';
import mercadopago from 'mercadopago';

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json();

    const preference = {
      items: items.map((item: any) => ({
        title: item.name,
        unit_price: Number(item.price),
        quantity: item.quantity,
        currency_id: 'ARS',
        picture_url: item.image || '',
      })),
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
        failure: `${process.env.NEXT_PUBLIC_SITE_URL}/failure`,
        pending: `${process.env.NEXT_PUBLIC_SITE_URL}/pending`,
      },
      auto_return: 'approved',
      statement_descriptor: 'AUTONEX',
    };

    const response = await mercadopago.preferences.create(preference);

    return NextResponse.json({ 
      preferenceId: response.body.id,
      init_point: response.body.init_point 
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ 
      error: 'Error al crear la preferencia de pago' 
    }, { status: 500 });
  }
}
