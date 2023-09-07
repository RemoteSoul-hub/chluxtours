import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  carModel?: string;
  startDate?: string;
  endDate?: string;
  carValue?: string;
  category?: string;
  carBrand?: string;
  year?: number;
  color?: string;
  seats?: number;

}

export default async function getListings(
  params: IListingsParams
) {
  try {
    const {
      userId,
      carModel, 
      carValue,
      startDate,
      endDate,
      category,
      carBrand,
      year,
      color,
      seats,
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (carModel) {
      query.carModel = carModel;
    }

    if (carValue) {
      query.carValue = carValue;
    }
    if (carBrand) {
      query.carBrand = carBrand;
    }
    if (year) {
      query.year = year;
    }
    if (color) {
      query.color = color;
    }
    if (seats) {
      query.seats = seats;
    }


    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate }
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate }
              }
            ]
          }
        }
      }
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}