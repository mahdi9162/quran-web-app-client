import Container from '@/components/shared/Container';
import { getAllSurahs } from '@/lib/quran-api';
import SurahsList from '@/components/surah/SurahsList';

const SurahsPage = async () => {
  const surahs = await getAllSurahs();

  return (
    <section className="my-20">
      <Container>
        <div className="space-y-10">
          <div className="space-y-4 text-center">
            <div className="inline-flex rounded-full bg-secondary/15 px-4 py-2 text-sm font-semibold text-secondary-content">
              All Surahs
            </div>

            <div className="space-y-3">
              <h1 className="text-2xl font-bold text-base-content md:text-4xl lg:text-5xl">Browse All 114 Surahs</h1>
              <p className="mx-auto max-w-lg text-sm md:text-base md:leading-7 text-base-content/70">
                Explore the complete list of surahs with Arabic and English names, verse counts, and revelation types.
              </p>
            </div>
          </div>

          <SurahsList surahs={surahs} />
        </div>
      </Container>
    </section>
  );
};

export default SurahsPage;
