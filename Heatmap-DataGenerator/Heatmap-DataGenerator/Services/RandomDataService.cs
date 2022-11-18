namespace Heatmap_DataGenerator.Services
{
    public class RandomDataService: IRandomDataService
    {
        public IEnumerable<Array> GetData() => Enumerable.Range(0, 1600).Select(x => generateInstance(400));

        private Array generateInstance(int length) => Enumerable.Range(0, length).Select(x => Random.Shared.Next(0, 10)).ToArray();
        //{ 
        //    int[] instance = new int[length];
        //    Random generator = new Random();
        //    int i = 0;

        //    while (i < length)
        //    {
        //        instance[i] = +generator.Next(1, 10);
        //        i++;
        //    }

        //    return instance;
        //}
    }
}
